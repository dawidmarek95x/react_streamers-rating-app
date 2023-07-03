import avatarPlaceholder from "../assets/images/AvatarPlaceholder.jpg";

export const checkAvatarURL = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);

    if (response.ok) {
      return url;
    } else {
      return avatarPlaceholder;
    }
  } catch (error) {
    return avatarPlaceholder;
  }
};
