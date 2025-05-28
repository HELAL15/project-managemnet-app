import NavLinks from '../common/NavLinks';
import ThemeSwitch from '../common/ThemeSwitch';

const Footer = () => {
    return (
        <>
            <footer className='text-foreground border-t-secondary relative z-10 mt-6 border-t py-20'>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        <div className='space-y-2'>
                            <span className='block text-3xl font-bold uppercase'>helal</span>
                            <p className='text-foreground/60'>
                                Built a clean and modular folder structure for a Next.js App Router project, focusing on
                                scalability, reusability, and maintainability.
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <span className='block text-xl font-semibold capitalize'>Pages</span>
                            <ul className='columns-2 space-y-3'>
                                <NavLinks />
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <span className='block text-xl font-semibold capitalize'>quick links</span>
                            <ul className='columns-2 space-y-3'>
                                <NavLinks />
                            </ul>
                            <ul className='columns-2 space-y-3'>
                                <NavLinks />
                            </ul>
                        </div>
                        <div className=''>
                            <ThemeSwitch />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
