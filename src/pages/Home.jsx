import { Navbar } from "../components/Navbar"
import { StarBackground } from "../components/StarBackground"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}

        {/* Footer */}
    </div>
}
