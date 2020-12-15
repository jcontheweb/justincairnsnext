import SocialBarItem from "./SocialBarItem";
import socials from './socials.data'

export default function SocialBar() {
  return (
    <div data-aos="fade-left" className="hidden md:flex fixed right-0 inset-y-0 flex-col justify-center items-center px-6 z-50">
      {socials.map((item) => (
        <SocialBarItem
          key={item.name}
          name={item.name}
          url={item.url}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
