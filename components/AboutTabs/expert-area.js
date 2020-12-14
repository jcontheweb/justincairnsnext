import PrimaryButton from '../Buttons/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton'

export default function ExpertArea() {
  return (
    <>
      <h3 className="font-medium text-2xl md:text-3xl mt-2 md:mt-4">
        My expertise
      </h3>
      <p className="mt-6 text-sm">
        Over 4 years of experience working in the IT industry field and a proven
        history of creating top-notch UI designs and AI for web and mobile
        applications.
      </p>
      <p className="mt-6 text-sm">
        Understanding business goals and combining logic with aesthetics to
        create beautiful, consistent and functional design solutions. Developing
        UX specifications through the user-centered design process and
        wireframes.
      </p>
      <div className="md:flex mt-8">
        <div className="mb-4 md:mb-0 md:mr-4">
          <PrimaryButton size="xl">Hire Me</PrimaryButton>
        </div>
        <div>
          <SecondaryButton size="md">Download CV</SecondaryButton>
        </div>
      </div>
    </>
  );
}
