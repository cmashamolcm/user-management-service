import { updateUser } from "../services/user-service";
import AddUser from "./add-user.component";

export default function EditUser() {
  return (
    <div className="edit-user">
      <AddUser
        buttonLabel="Update"
        backToUrl="/users"
        submitAction={updateUser}
      />
    </div>
  );
}
