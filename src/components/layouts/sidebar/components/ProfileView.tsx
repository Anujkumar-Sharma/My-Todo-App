import ProfileImage from "../../../../assets/images/profile.png";

const ProfileView = () => {
  return (
    <div>
      <div className="h-[118px] w-[118px] mb-[13.93px] rounded-full absolute top-0 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
        <img
          className="w-full h-full"
          src={ProfileImage}
          alt="profile-picture"
        />
      </div>
      <div className="text-center">
        <label
          htmlFor="user-name"
          className="text-[15px] font-medium leading-5 text-darkJungleGreen-100-1 dark:text-brightGray-100-1"
        >
          Hey, John Doe
        </label>
      </div>
    </div>
  );
};

export default ProfileView;
