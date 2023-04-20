import { TRPCError } from "@trpc/server";
import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const cardsRouter = createTRPCRouter({
  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),

  // getAll: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.example.findMany();
  // }),
  getCardById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const card = await ctx.prisma.card.findUnique({
        where: {
          id: input.id
        }
      });

      const fields = await ctx.prisma.field.findMany({
        where: {
          cardId: input.id
        }
      })

      if (!card) throw new TRPCError({ code: 'NOT_FOUND' });
      else return {card, fields}
    }),


  getCardsByUserId: protectedProcedure
  .query(async ({ ctx }) => {
    const Id = ctx.session.user.id
    const cards = await ctx.prisma.card.findMany({
      where: {
        userId: Id
      }
    });

    if (!Id) throw new TRPCError({ code: 'NOT_FOUND' });
    else return cards
  }),
});
