import React from "react";

export default function Footer() {
    return (
        <div className="flex justify-center gap-4 py-3 shadow-[0_1px_7px_1px_rgba(0,0,0,0.2)] fixed bottom-0 w-full bg-white">
            <p>© 2023 Airbnb, Inc.</p>

            <ul className="list-none flex gap-5">
                <li>
                    <a href="https://www.airbnb.co.in/terms/privacy_policy" className="hover:underline" target="_blank" rel="noopener noreferrer">Privacy
                    </a>
                </li>

                <li>
                    <a href="https://www.airbnb.co.in/terms" className="hover:underline" target="_blank" rel="noopener noreferrer">Terms
                    </a>
                </li>

                <li>
                    <a href="https://www.airbnb.co.in/about/company-details" className="hover:underline" target="_blank" rel="noopener noreferrer">Company Details
                    </a>
                </li>

                <li>
                    <a href="https://www.figma.com/file/4YjrygFEXOcDp9AAnVFv7o/Airbnb-Experiences?node-id=0%3A1&t=N1ILRTgK7umhmnm5-0" className="hover:underline" target="_blank" rel="noopener noreferrer">Figma Link
                    </a>
                </li>

            </ul>
        </div>
    )
}