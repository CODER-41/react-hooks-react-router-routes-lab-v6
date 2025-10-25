import NavBar from "../components/NavBar";

function ErrorPage() {
    return (
        // Added unnecessary <div> wrapper, removing it for cleaner HTML
        <> 
            <header>
                <NavBar />
            </header>
            <main>
                {/* FIX: Use lowercase for 'like' and 'something' */}
                <h1>Oops! Looks like something went wrong.</h1>
            </main>
        </>
    );
}
export default ErrorPage;