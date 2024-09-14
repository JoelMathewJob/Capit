import { Link } from "react-router-dom"
import { Search, Upload, Play, User, Eye } from "lucide-react"

export default function Reels() {
  return (
    <div className="container px-5 pt-4 mx-auto">
      <h1 className="m-5 text-2xl font-bold font-[poppins] px-3 text-center lg:text-left">Reels</h1>
      
        <main className="container grid max-w-6xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {renderVideoCard("How to make a delicious pasta dish in 15 minutes", "Cooking Guru", "1.2M views", 101)}
          {renderVideoCard("5 Productivity Hacks to Boost Your Workflow", "Productivity Guru", "750K views", 102)}
          {renderVideoCard("The Ultimate Guide to Skincare for Beginners", "Beauty Guru", "500K views", 103)}
          {renderVideoCard("10 Yoga Poses for Beginners to Improve Flexibility", "Yoga Instructor", "300K views", 104)}
          {renderVideoCard("5 Easy Hairstyles for Busy Mornings", "Beauty Guru", "200K views", 110)}
          {renderVideoCard("7 Healthy Snack Ideas for Busy People", "Nutrition Expert", "170K views", 106)}
          {renderVideoCard("How to Kick like pro", "Inside Out", "110K views", 107)}
          {renderVideoCard("Why marvel is the best", "Maths inUs", "850K views", 108)}
          {renderVideoCard("Reason why peacock is green in colour", "CarryMinati", "190K views", 109)}
        </main>
      
    </div>
  )
}

function renderVideoCard(title, user, views, id) {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <Link to="#" className="absolute inset-0 z-10">
        <span className="sr-only">Play</span>
      </Link>
      <img
        src={`https://picsum.photos/id/${id}/400/700`}
        alt="Thumbnail"
        width={400}
        height={700}
        className="w-full h-[400px] object-cover"
        style={{ aspectRatio: "400/700", objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/50 group-hover:opacity-100">
        <button className="w-12 h-12 p-2 text-white bg-white/20 hover:bg-white/30">
          <Play className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="font-semibold text-white line-clamp-2">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-white/80">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{user}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
