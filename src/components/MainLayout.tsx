import React from 'react';
import Link from 'next/link';
import { Navbar, NavItemContainer, NavItem } from '../syledComponents/nav';
import { Content } from '../syledComponents/content';

export function MainLayout({ children }) {
  return (
    <>
      <Navbar>
        <NavItemContainer>
          <NavItem>
            <Link href={"/"}><a>Last Post</a></Link>
          </NavItem>

          <NavItem>
            <Link href={"/posts/new"}><a>Create Post</a></Link>
          </NavItem>

          <NavItem>
            <Link href={"/posts/all"}><a>All posts</a></Link>
          </NavItem>


        </NavItemContainer>
      </Navbar>
      <main>
        <Content>
          {children}
        </Content>
      </main>
    </>
  )
};