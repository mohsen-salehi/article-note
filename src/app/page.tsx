// src/app/page.tsx
import { getDbSize, getDbCapacity } from '@/lib/db';

export default function Dashboard() {
    const dbSize = getDbSize();
    const dbCapacity = getDbCapacity();
    const usagePercentage = (dbSize / dbCapacity) * 100;

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-2xl font-bold mb-4">Dashboard</div>
            <div className="mb-4">
                <div className="text-lg font-semibold">Database Usage</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${usagePercentage}%` }}
                    ></div>
                </div>
                <p className="mt-2">
                    {usagePercentage.toFixed(2)}% used ({(dbSize / 1024 / 1024).toFixed(2)} MB / {(dbCapacity / 1024 / 1024).toFixed(2)} MB)
                </p>
            </div>
        </div>
    );
}