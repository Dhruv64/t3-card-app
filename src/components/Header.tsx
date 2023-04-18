
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import ClientOnly from './client-only';
import {AiOutlinePlus} from "react-icons/ai";


const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      {/* <Link legacyBehavior href="/">
        <a className="bold" data-active={isActive('/')}>
          Profile
        </a>
      </Link> */}
      {/* <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: var(--geist-foreground);
          display: inline-block;
        }

        .left a[data-active='true'] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style> */}
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className="left">
        {/* <Link legacyBehavior href="/">
          <a className="bold" data-active={isActive('/')}>
            Profile
          </a>
        </Link> */}
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          .left a[data-active='true'] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!session) {
    left = (
      <div className="right">
        <Link legacyBehavior href="/api/auth/signin">
          <a data-active={isActive('/signup')}>Log in</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid var(--geist-foreground);
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }
        `}</style>
      </div>
    );
  }

  if (session) {

    left = (
      <div className="left">
        <div className='h-16 w-screen bg-blue-400'>
          {/* <Link legacyBehavior href="/">
            <a className="bold" data-active={isActive('/')}>
              Profile
            </a>
          </Link> */}
          <div className='flex place-items-center'>
            <div >
              <p>
                {session.user.name}
              </p>
              {/* <p>
              ({session.user.email})
              </p> */}
            </div >
            <div className='pl-5'>
            <button className='bg-gray-300 rounded-xl  h-6'  onClick={() => signOut()}>
              <a>Log out</a>
            </button>
            </div>
            
            <div className='ml-5'>
              <Link href="/app/create"><AiOutlinePlus title='Create A Card' size={25}/></Link>
            </div>
          </div>
        </div>
      </div>
    );

  }

  return (
    <ClientOnly>
      <nav>
        {left}

        <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
        }
      `}</style>
      </nav>
    </ClientOnly>
  );
};

export default Header;