

import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack } from '@mantine/core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
type ContactIconVariant = 'white' | 'gradient';

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === 'gradient'
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][6]
        } 100%)`
        : 'none',
    backgroundColor: 'transparent',
  },

  type: {
    color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
  },

  entry: {
    color: variant === 'gradient' ? theme.black : theme.white,
  },
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: React.ReactNode;
  type: React.ReactNode;
  entry: React.ReactNode;
  variant?: ContactIconVariant;
  link?: React.ReactNode;
}

function ContactIcon({
  icon,
  type,
  entry,
  link,
  variant = 'gradient',
  className,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <a href={link}>
      <div className={cx(classes.wrapper, className)} {...others}>
        {variant === 'gradient' ? (
          <ThemeIcon size={40} radius="md" className={classes.icon}>
            {/* <Icon size="1.5rem" /> */}
            <FontAwesomeIcon icon={"fa-solid fa-"+ icon} />
          </ThemeIcon>
        ) : (
          <Box mr="md">
            {/* <Icon size="1.5rem" /> */}
          </Box>
        )}

        <div>
          <Text size="xs" className={classes.type} >
            {type}
          </Text>
          <Text className={classes.entry}>{entry}</Text>
        </div>
      </div>
    </a>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

// const MOCKDATA = [
//   { type: 'Email', entry: 'hello@mantine.dev', icon: At },
//   { type: 'Phone', entry: '+49 (800) 335 35 35', icon: Phone },
//   { type: 'Address', entry: '844 Morris Park avenue', icon: MapPin },
//   { type: 'Working hours', entry: '8 a.m. – 11 p.m.', icon: Sun },
// ];

export default function ContactIconsList({ data, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
  return <Stack>{items}</Stack>;
}

export function ContactIcons() {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundColor: theme.white,
        })}
      >
        <ContactIconsList />
      </Box>

      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][6]} 0%, ${theme.colors[theme.primaryColor][4]
            } 100%)`,
        })}
      >
        <ContactIconsList variant="white" />
      </Box>
    </SimpleGrid>
  );
}