const BluredCircles = () => {
    return (
        <>
            <div className='nc-BgGlassmorphism absolute inset-x-0 z-0 flex min-h-0 overflow-hidden py-12 pl-20 md:top-0 xl:top-0'>
                <span className='bg-foreground block size-96 h-72 w-72 rounded-full opacity-10 mix-blend-multiply blur-3xl filter'></span>
                <span className='nc-animation-delay-2000 bg-foreground mt-40 -ml-20 block size-96 h-72 w-72 rounded-full opacity-10 mix-blend-multiply blur-3xl filter'></span>
            </div>
        </>
    );
};

export default BluredCircles;
