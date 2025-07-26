"use client";

import Link from "next/link";
import React from "react";

import Me from "@/lib/me";


// put my email in client link to avoid bots

export default function Email({ className, href = "mailto:" + Me.email, children, ...props }: { className: string, href?: string, children?: React.ReactNode, [props: string]: any }) {
    return (
        <Link className={className} href={href} {...props}>
            {children ? children : Me.email}
        </Link>
    )
}