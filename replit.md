# FraudHunt - AI-Powered Fraud Detection Platform

## Overview

FraudHunt is a modern fintech application that provides AI-powered fraud detection services to businesses. The application is built as a full-stack solution with a React frontend, Express.js backend, and PostgreSQL database. It features a professional marketing website with pages for showcasing features, team information, pricing plans, and contact forms.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite for development and production builds
- **UI Components**: Comprehensive component library using Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon Database serverless connection
- **Session Management**: PostgreSQL-based session storage
- **API Design**: RESTful API architecture with `/api` prefix

### Project Structure
- **Monorepo**: Single repository with client, server, and shared code
- **Client**: React application in `/client` directory
- **Server**: Express.js backend in `/server` directory
- **Shared**: Common schemas and types in `/shared` directory

## Key Components

### Frontend Pages
- **Home**: Landing page with hero section, features, and call-to-action
- **Results**: Statistics and case studies showcasing platform effectiveness
- **Team**: Team member profiles and company information
- **Pricing**: Tiered pricing plans with feature comparisons
- **Contact**: Demo request form with validation

### UI Component System
- **Design System**: shadcn/ui with custom fintech-themed styling
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom Components**: FeatureCard, StatsCard, PricingCard, TeamMember
- **Toast System**: User feedback and notifications
- **Form Handling**: React Hook Form with Zod validation

### Backend Infrastructure
- **Route Registration**: Centralized route management in `/server/routes.ts`
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **Error Handling**: Global error middleware for consistent API responses
- **Request Logging**: Comprehensive logging for API requests and responses

## Data Flow

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Type Safety**: Drizzle Zod integration for runtime validation
- **Migrations**: Drizzle Kit for database schema management

### API Communication
- **Query Client**: Centralized API request handling with authentication
- **Error Handling**: Consistent error responses across all endpoints
- **Data Fetching**: React Query for caching and synchronization

### Storage Pattern
- **Interface-Based Design**: IStorage interface for flexible data layer
- **Memory Storage**: Development implementation for rapid prototyping
- **Database Ready**: Easy migration to PostgreSQL with Drizzle ORM

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18+ with TypeScript support
- **Database**: Neon Database PostgreSQL serverless
- **UI Framework**: Radix UI primitives with shadcn/ui styling
- **State Management**: TanStack React Query v5
- **ORM**: Drizzle ORM with PostgreSQL dialect

### Development Tools
- **Build System**: Vite with TypeScript compilation
- **Styling**: Tailwind CSS with PostCSS processing
- **Code Quality**: TypeScript strict mode configuration
- **Development Environment**: Replit-optimized with hot reload

### Authentication & Sessions
- **Session Storage**: connect-pg-simple for PostgreSQL session store
- **Security**: Prepared for secure authentication implementation
- **User Management**: Basic user CRUD operations defined

## Deployment Strategy

### Build Process
- **Frontend**: Vite production build to `/dist/public`
- **Backend**: ESBuild compilation for Node.js production
- **Static Assets**: Optimized asset bundling and compression

### Environment Configuration
- **Database**: Environment variable for DATABASE_URL
- **Development**: Node.js development server with hot reload
- **Production**: Node.js production server with static file serving

### Scalability Considerations
- **Serverless Ready**: Neon Database for auto-scaling database
- **API Structure**: RESTful design for horizontal scaling
- **Asset Optimization**: CDN-ready static asset structure

## Changelog

Changelog:
- July 06, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.