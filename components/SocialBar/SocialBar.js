import SocialBarItem from "./SocialBarItem";
import socials from '../../shared/socials.data'

export default function SocialBar() {
  return (
    <div data-aos="fade-left" className="fixed inset-y-0 right-0 z-40 flex-col items-center justify-center hidden px-6 md:flex">
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
