import Sidebar from "@/components/shared/sidebar";
import DataTable from "@/components/shared/table";

function AdminClientsPage() {
  return (  
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex-grow flex items-center justify-center p-24">
        <DataTable />
      </div>
    </div>
  );
}

export default AdminClientsPage;
