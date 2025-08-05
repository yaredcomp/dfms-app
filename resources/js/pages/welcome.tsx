import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden dark:bg-[#161615]">
                        {/* Hero Section */}
                        <div className="flex-1 flex flex-col justify-center p-8 text-center lg:text-left">
                            <h1 className="text-3xl font-bold text-green-700 mb-4">
                                Welcome to Dilla University<br />
                                <span className="text-2xl text-green-900">Digital File Management System</span>
                            </h1>
                            <p className="text-gray-700 mb-6 dark:text-[#A1A09A]">
                                Securely manage, organize, and access your university documents online.<br />
                                <span className="font-semibold text-green-800">Dilla University</span> is committed to digital transformation and service excellence.
                            </p>
                            <div className="flex flex-col gap-4 w-full max-w-xs mx-auto lg:mx-0 lg:max-w-sm">
                                {/* Action links removed as requested */}
                            </div>
                            <footer className="mt-8 text-xs text-gray-400 lg:text-left text-center">
                                &copy; {new Date().getFullYear()} Dilla University. All rights reserved.
                            </footer>
                        </div>
                        {/* Logo/Image Section */}
                        <div className="flex-1 flex items-center justify-center bg-green-50 dark:bg-[#102d19] p-8">
                            <img
                                src="/du_logo.gif"
                                alt="Dilla University Logo"
                                className="w-64 h-64 object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
