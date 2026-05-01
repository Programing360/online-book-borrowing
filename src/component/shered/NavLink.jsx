'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {

    const pathName = usePathname()
    const isActive = href === pathName

    return (
        <div>
            <Link className={`font-bold ${isActive && 'border-b-2 border-[#6158d4]' }`} href={href}>{children}</Link>
        </div>
    );
};

export default NavLink;