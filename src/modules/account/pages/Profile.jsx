import { useAuth } from '../../../core/auth/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  const handleEditProfile = () => {
    console.log("Edit profile");
    // Navigate to edit profile page or open modal
  };

  const handleChangePassword = () => {
    console.log("Change password");
    // Navigate to change password page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Profile</h1>
          <p className="text-gray-600 mb-6">
            Manage your account settings and preferences.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <p className="mt-1 text-sm text-gray-900">{user?.firstName || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <p className="mt-1 text-sm text-gray-900">{user?.lastName || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-sm text-gray-900">{user?.email || 'Not set'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <p className="mt-1 text-sm text-gray-900 capitalize">{user?.role || 'User'}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Account Actions</h3>
              <div className="space-y-3">
                <button type="button" onClick={handleEditProfile} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                  Edit Profile
                </button>
                <button type="button" onClick={handleChangePassword} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 ml-3">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;