export default function NotificationsPage() {
    return (
      <div className="px-5 pt-4 mx-auto ">
        <h1 className="m-5 text-2xl font-bold font-[poppins] px-3 text-center lg:text-left">Notifications</h1>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((notification) => (
            <div key={notification} className="flex items-center p-4 space-x-2 rounded-lg shadow bg-card text-card-foreground">
              <div className="w-10 h-10 rounded-full bg-muted"></div>
              <div>
                <p className="font-semibold">User {notification}</p>
                <p className="text-sm text-muted-foreground">Liked your post</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }