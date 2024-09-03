import { CheckCircle2Icon} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
 // You'll need Heroicons for the check icon.

const ThankYou = () => {
    return (
        <div className="flex items-center justify-center h-screen  ">
            <div className=" bg-white rounded-lg p-10 text-center drop-shadow-2xl ">
                <CheckCircle2Icon className="w-16 h-16 text-blue-600 mx-auto" />
                <h1 className="text-3xl font-semibold text-blue-600 mt-4 ">Success</h1>
                <div className="text-gray-400 mt-2 mb-7 w-[450px]">
                <p>Thank you for contacting us! We have received your message and will get back to you as soon as possible.</p>
                <p className='mt-2'>If you have any <strong>urgent concerns</strong>, please feel free to reach out directly to our support team.</p>
                </div>
               
                <Link href="/" className=" text-blue-400 underline hover:text-blue-500">Go back</Link>
            </div>
        </div>
    );
}

export default ThankYou;
