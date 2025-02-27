import React from 'react';
import { Link } from '@inertiajs/react';
/*
 * add about snd contact pages
 *  add login on Navbar
 *  add enroll now button on Navbar``
 *
 * */

const Navbar = () => {
    return (
        <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
            <Link href="/" style={{ marginRight: '10px', color: '#fff' }}>Home</Link>
            <Link href="/about" style={{ marginRight: '10px', color: '#fff' }}>About</Link>
            <Link href="/contact" style={{ color: '#fff' }}>Contact</Link>
        </nav>
    );
};

export default Navbar;
