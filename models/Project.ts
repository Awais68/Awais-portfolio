import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    techStack: [{
        type: String,
    }],
    liveUrl: {
        type: String,
        required: true,
    },
    githubUrl: {
        type: String,
        required: true,
    },
    gradient: {
        type: String,
        default: 'from-blue-500 to-cyan-500',
    },
    metric: {
        type: String,
        default: 'Featured',
    },
    impact: {
        type: String,
        default: 'Latest Project',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema)
