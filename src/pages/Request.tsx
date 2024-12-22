import UserForm from "@/components/pages/users/UserForm";

export const Request = () => <div className="bg-black text-white h-app">
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center">
            <h2 className="text-center text-3xl font-extrabold mb-6">Fill Your Information</h2>
            <UserForm />
        </div>
    </div>
</div>