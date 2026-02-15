import { useProfileData } from "@/hooks/mutations/queries/use-profile-data";
import Fallback from "../fallback";
import Loader from "../loader";
import defaultAvartor from "@/assets/default-avatar.png";
import { useSession } from "@/store/session";
import EditProfileButton from "./edit-profile-buttons";

export default function ProfileInfo({ userId }: { userId: string }) {
  const session = useSession();

  const {
    data: profile,
    error: fetchProfileError,
    isPending: isFetchngProfilePending,
  } = useProfileData(userId);

  if (fetchProfileError) return <Fallback />;
  if (isFetchngProfilePending) return <Loader />;

  const isMine = session?.user.id === userId;

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img
        src={profile.avatar_url || defaultAvartor}
        className="h-30 w-30 rounded-full object-cover"
        alt=""
      />
      <div className="flex flex-col items-center gap-2">
        <div className="text-xl font-bold">{profile.nickname}</div>
        <div className="text-muted-foreground">{profile.bio}</div>
      </div>
      {isMine && <EditProfileButton />}
    </div>
  );
}
