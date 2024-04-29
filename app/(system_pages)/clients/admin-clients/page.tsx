'use client';
import DataTable from "@/components/shared/table";
import {deleteMember, getMembers} from "@/data/GetMembers";
import AddMemberContent from "./components/add-member-modal-content";
function AdminClientsPage() {

    const INITIAL_VISIBLE_COLUMNS = ["name","genre", "membership", "status", "actions"];

    const sort_descriptor={
        column: "name",
        direction: "ascending",
    };



  return (  
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex-grow flex items-center justify-center p-24">
        <DataTable
            initial_visible_columns={INITIAL_VISIBLE_COLUMNS}
            sort_descriptor={sort_descriptor}
            getData={getMembers}
            name={"miembros"}
            onDelete={deleteMember}
            modalContent={<AddMemberContent />}
            />
      </div>
    </div>
  );
}

export default AdminClientsPage;
