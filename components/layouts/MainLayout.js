import Header from './Header'
import Nav from './Nav'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex'}}>
                <Nav />
                {children}
            </div>
        </div>
    )
}

export default MainLayout;
