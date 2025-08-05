import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { FileText, Users, Clock, Mail, BarChart2 } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4 overflow-x-auto bg-gray-50 dark:bg-neutral-900">
                <div className="grid gap-6 md:grid-cols-4">
                    <div className="rounded-xl bg-white dark:bg-neutral-800 p-6 shadow border border-gray-200 dark:border-neutral-700 flex flex-col items-center">
                        <FileText className="w-8 h-8 text-blue-600 mb-2" />
                        <span className="text-3xl font-bold text-blue-600">1,245</span>
                        <span className="mt-2 text-sm text-gray-500">Total Files</span>
                    </div>
                    <div className="rounded-xl bg-white dark:bg-neutral-800 p-6 shadow border border-gray-200 dark:border-neutral-700 flex flex-col items-center">
                        <Users className="w-8 h-8 text-green-600 mb-2" />
                        <span className="text-3xl font-bold text-green-600">312</span>
                        <span className="mt-2 text-sm text-gray-500">Active Users</span>
                    </div>
                    <div className="rounded-xl bg-white dark:bg-neutral-800 p-6 shadow border border-gray-200 dark:border-neutral-700 flex flex-col items-center">
                        <Clock className="w-8 h-8 text-yellow-600 mb-2" />
                        <span className="text-3xl font-bold text-yellow-600">87</span>
                        <span className="mt-2 text-sm text-gray-500">Pending Requests</span>
                    </div>
                    <div className="rounded-xl bg-white dark:bg-neutral-800 p-6 shadow border border-gray-200 dark:border-neutral-700 flex flex-col items-center">
                        <Mail className="w-8 h-8 text-purple-600 mb-2" />
                        <span className="text-3xl font-bold text-purple-600">24</span>
                        <span className="mt-2 text-sm text-gray-500">New Messages</span>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <div>
                        <div className="rounded-xl bg-white dark:bg-neutral-800 p-6 shadow border border-gray-200 dark:border-neutral-700 mb-6">
                            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><BarChart2 className="w-5 h-5 text-blue-600" /> File Uploads Trend</h2>
                            {/* Example chart area - replace with a real chart component as needed */}
                            <div className="h-48 flex items-end gap-2">
                                <div className="w-8 bg-blue-200 dark:bg-blue-900 rounded-t h-12"></div>
                                <div className="w-8 bg-blue-400 dark:bg-blue-700 rounded-t h-24"></div>
                                <div className="w-8 bg-blue-600 dark:bg-blue-500 rounded-t h-32"></div>
                                <div className="w-8 bg-blue-400 dark:bg-blue-700 rounded-t h-20"></div>
                                <div className="w-8 bg-blue-200 dark:bg-blue-900 rounded-t h-16"></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-400 mt-2">
                                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                            </div>
                        </div>
                        <div className="rounded-xl bg-white dark:bg-neutral-800 p-6 shadow border border-gray-200 dark:border-neutral-700">
                            <h2 className="text-lg font-semibold mb-4">Completed Tasks</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm text-left">
                                    <thead className="bg-gray-100 dark:bg-neutral-700">
                                        <tr>
                                            <th className="px-4 py-2 font-semibold">Task</th>
                                            <th className="px-4 py-2 font-semibold">Completed By</th>
                                            <th className="px-4 py-2 font-semibold">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200 dark:border-neutral-700">
                                            <td className="px-4 py-2">Upload Annual Report</td>
                                            <td className="px-4 py-2">Jane Doe</td>
                                            <td className="px-4 py-2">2025-08-01</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 dark:border-neutral-700">
                                            <td className="px-4 py-2">Approve Budget</td>
                                            <td className="px-4 py-2">John Smith</td>
                                            <td className="px-4 py-2">2025-08-02</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">Send Notification</td>
                                            <td className="px-4 py-2">Alice</td>
                                            <td className="px-4 py-2">2025-08-03</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white dark:bg-neutral-800 p-6 shadow border border-gray-200 dark:border-neutral-700">
                        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li>File <span className="font-medium">Annual_Report.pdf</span> was uploaded by <span className="font-medium">Jane Doe</span></li>
                            <li>User <span className="font-medium">John Smith</span> approved a request</li>
                            <li>Team Leader <span className="font-medium">Alice</span> sent a message</li>
                            <li>File <span className="font-medium">Budget2025.xlsx</span> was updated</li>
                        </ul>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
