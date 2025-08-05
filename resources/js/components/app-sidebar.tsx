    // ...existing code...
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Users, UserCog } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Directors',
        href: '/directors',
        icon: Users,
    },
    {
        title: 'Team Leaders',
        href: '/team-leaders',
        icon: UserCog,
    },
    {
        title: 'Manage Document',
        icon: Folder,
        items: [
            {
                title: 'Letters',
                href: '/documents/letters',
                icon: BookOpen,
            },
            {
                title: 'Official Documents',
                href: '/documents/official',
                icon: Folder,
            },
        ],
    },
    {
        title: 'Manage Request',
        icon: UserCog,
        items: [
            {
                title: 'New',
                href: '/requests/new',
                icon: UserCog,
            },
            {
                title: 'Pending',
                href: '/requests/pending',
                icon: UserCog,
            },
            {
                title: 'Approved',
                href: '/requests/approved',
                icon: UserCog,
            },
        ],
    },
    {
        title: 'Reporting',
        icon: Folder,
        items: [
            {
                title: 'Completed',
                href: '/reporting/completed',
                icon: Folder,
            },
            {
                title: 'Pending',
                href: '/reporting/pending',
                icon: Folder,
            },
            {
                title: 'Approved',
                href: '/reporting/approved',
                icon: Folder,
            },
        ],
    },
    {
        title: 'User Management',
        icon: Users,
        items: [
            {
                title: 'Team Leaders',
                href: '/users/team-leaders',
                icon: UserCog,
            },
            {
                title: 'Users',
                href: '/users',
                icon: Users,
            },
            {
                title: 'Directors',
                href: '/users/directors',
                icon: Users,
            },
        ],
    },
    {
        title: 'Message',
        icon: BookOpen,
        items: [
            {
                title: 'Directors',
                href: '/messages/directors',
                icon: Users,
            },
            {
                title: 'Team Leaders',
                href: '/messages/team-leaders',
                icon: UserCog,
            },
            {
                title: 'User',
                href: '/messages/user',
                icon: Users,
            },
        ],
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'System Manual',
        href: '#',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
