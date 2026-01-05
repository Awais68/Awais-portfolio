import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import connectDB from '@/lib/mongodb'
import Project from '@/models/Project'

// GET single project
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await connectDB()
        const project = await Project.findById(params.id)

        if (!project) {
            return NextResponse.json(
                { error: 'Project not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(project)
    } catch (error) {
        console.error('Error fetching project:', error)
        return NextResponse.json(
            { error: 'Failed to fetch project' },
            { status: 500 }
        )
    }
}

// PUT update project (protected)
export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const user = await currentUser()

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        } await connectDB()
        const body = await request.json()

        const project = await Project.findByIdAndUpdate(
            params.id,
            body,
            { new: true, runValidators: true }
        )

        if (!project) {
            return NextResponse.json(
                { error: 'Project not found' },
                { status: 404 }
            )
        }

        return NextResponse.json(project)
    } catch (error) {
        console.error('Error updating project:', error)
        return NextResponse.json(
            { error: 'Failed to update project' },
            { status: 500 }
        )
    }
}

// DELETE project (protected)
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const user = await currentUser()

        if (!user) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        } await connectDB()
        const project = await Project.findByIdAndDelete(params.id)

        if (!project) {
            return NextResponse.json(
                { error: 'Project not found' },
                { status: 404 }
            )
        }

        return NextResponse.json({ message: 'Project deleted successfully' })
    } catch (error) {
        console.error('Error deleting project:', error)
        return NextResponse.json(
            { error: 'Failed to delete project' },
            { status: 500 }
        )
    }
}
