import footerTbcLogo from '../assets/footer-tbc-logo.png'
import footerFbLogo from '../assets/footer-fb-logo.png'
import footerYtLogo from '../assets/footer-yt-logo.png'
function Footer() {
    return (
        <footer className="bg-[#1A1E1F] pt-12 text-[#F4F4F4]">
            <div className="max-w-[1000px] m-auto pb-8 xsm:px-12 lg:px-0 ">
                <div className='flex items-center justify-between p-4'>
                    <img src={footerTbcLogo} />
                    <div className='flex gap-2'>
                        <a href='https://www.facebook.com/tbcbank/ ' target='_blank'>
                            <img src={footerFbLogo} />
                        </a>
                        <a href='https://www.youtube.com/channel/UCGk9R2LV2ywOL80r8Xc6xtQ' target='_blank'>
                            <img src={footerYtLogo} />
                        </a>
                    </div>
                </div>
                <div className='p-4'>
                    <h3 className='mb-2 text-sm font-arial'>© 2023 ყველა უფლება დაცულია</h3>
                    <div className='flex items-center justify-between'>
                        <a className='text-sm font-arial' >წესები და პირობები</a>
                        <a href="mailto:itacademy@tbcbank.com.ge" className='bg-[#00AFF3] hover:bg-[#D5D5D5] hover:text-black p-2 px-6 rounded-md font-arial transition-all duration-300 ease-in-out'>მოგვწერეთ</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
