import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Calm Clarity | Public Editorial Hub",
    description: "A luxury health journal for quiet minds and sharper focus.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="aura">
                    <div className="aura-1" />
                    <div className="aura-2" />
                </div>
                {children}
            </body>
        </html>
    );
}
