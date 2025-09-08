# Portfolio Web Application

## Overview

This is a modern, full-stack web application built as a French developer portfolio website. The application showcases a developer's work, skills, and contact information through an elegant, animated interface with dark theme styling. It features a React frontend with shadcn/ui components and an Express.js backend, with database integration using Drizzle ORM and PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

The frontend follows a component-based architecture with sections for hero, about, portfolio, skills, and contact. The design emphasizes visual appeal with neon effects, gradients, and smooth animations.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Development Server**: Custom Vite integration for hot module replacement in development
- **API Structure**: RESTful API design with `/api` prefix for all backend routes

The backend uses a modular approach with separate files for routing, storage abstraction, and development server setup.

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Database**: PostgreSQL with Drizzle ORM migrations
- **Validation**: Zod schemas for runtime type validation

### Development and Build System
- **Development**: Custom development server that integrates Vite with Express
- **Production Build**: Separate build process for client (Vite) and server (esbuild)
- **Type Checking**: Comprehensive TypeScript configuration across client, server, and shared code
- **Hot Reload**: Full-stack hot reloading in development environment

### Component Architecture
The UI is built using a comprehensive set of reusable components including:
- Form components (Input, Textarea, Button, Checkbox, etc.)
- Layout components (Card, Dialog, Sheet, etc.)
- Navigation components (Tabs, Accordion, etc.)
- Data visualization components (Chart, Progress, etc.)

### Styling System
- **Design System**: Custom color palette with CSS variables for easy theming
- **Typography**: Multiple font families (Inter, Georgia, Menlo) for different use cases
- **Animations**: Custom CSS animations and transitions
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework for Node.js
- **Vite**: Build tool and development server
- **TypeScript**: Type system for both frontend and backend

### Database and ORM
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect
- **@neondatabase/serverless**: PostgreSQL database driver optimized for serverless environments
- **Drizzle Kit**: Database migration and schema management tools

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Lucide React**: Icon library with React components
- **class-variance-authority**: Utility for creating type-safe component variants

### State Management and Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema definition

### Development Tools
- **tsx**: TypeScript execution engine for development
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing tool with Autoprefixer
- **Wouter**: Lightweight routing library for React

### Session and Authentication Infrastructure
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **nanoid**: Unique ID generation utility

The application is designed to be easily deployable to platforms like Replit, with specific configurations for the Replit environment including error overlays and development banners.