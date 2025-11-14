# CogniLab - Cognitive Science Research Platform

A modern, full-featured web-based platform for conducting millisecond-accurate cognitive science and psychology experiments online.

## 🧠 Platform Overview

CogniLab democratizes cognitive research by bringing lab-grade experiments to the web, enabling researchers to:
- Build experiments with a visual no-code interface
- Deploy studies to global participant pools
- Capture millisecond-accurate reaction times
- Analyze data with real-time visualizations
- Export results to SPSS, R, Python, and CSV

## 🎨 Design Features

- **Premium Research-Lab Aesthetic**: Clean, professional UI with electric blue, deep violet, and teal accents
- **Responsive Design**: Works on all modern devices and screen sizes
- **Space Grotesk & Inter Fonts**: Beautiful typography optimized for readability
- **Smooth Animations**: Polished interactions with hover states and transitions
- **Visual Hierarchy**: Clear information architecture with cards, gradients, and shadows

## 📦 Complete Page Structure

### Public Pages
- **Landing Page (/)**: Hero section, problem statement, solution showcase, and call-to-action
- **Participant Portal (/participant)**: Study browser, consent forms, demographics collection
- **Experiment Runner (/experiment/[id])**: Fullscreen experiment interface with millisecond timing

### Researcher Dashboard (/dashboard)
- **Overview**: Stats cards, activity charts, recent experiments
- **Experiments (/dashboard/experiments)**: Experiment list and management
- **Experiment Builder (/dashboard/experiments/builder)**: Visual experiment designer with drag-drop blocks
- **Analytics (/dashboard/analytics)**: Advanced data visualization and statistics
- **Participants (/dashboard/participants)**: Participant management with filters and search
- **Data Management (/dashboard/data)**: Export tools for CSV, JSON, and analysis scripts
- **Settings (/dashboard/settings)**: Profile, lab info, API keys, notifications, privacy

## 🗄️ Database Schema

Complete SQLite database with Drizzle ORM:
- **Researcher**: User accounts and institution information
- **Experiment**: Study configurations and timeline blocks
- **Participant**: Demographics and participant codes
- **Session**: Experiment sessions with status tracking
- **Trial**: Individual trial data with millisecond-accurate timestamps

### Sample Data Included
- 3 researchers from Stanford, MIT, and Oxford
- 10 varied experiments (Stroop, attention, memory, etc.)
- 55 participants with realistic demographics
- 80 sessions (50 completed, 15 in-progress, 10 abandoned, 5 pending)
- 250+ trial records with reaction times and accuracy data

## 🔧 Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI (40+ components)
- **Database**: Turso (libSQL) with Drizzle ORM
- **Charts**: Recharts
- **Icons**: Lucide React

## 🚀 Getting Started

1. **Install Dependencies**
```bash
npm install
# or
bun install
```

2. **Environment Variables**
The database is already configured with Turso. Credentials are in `.env`

3. **Run Development Server**
```bash
npm run dev
# or
bun dev
```

4. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📍 Key Routes

- `/` - Landing page
- `/dashboard` - Researcher dashboard
- `/dashboard/experiments` - Experiments list
- `/dashboard/experiments/builder` - Experiment builder
- `/dashboard/analytics` - Data analytics
- `/dashboard/participants` - Participant management
- `/dashboard/data` - Data export tools
- `/dashboard/settings` - Settings
- `/participant` - Participant portal
- `/experiment/[id]` - Experiment runner

## 🎯 API Endpoints

- `GET/POST /api/experiments` - Experiment CRUD operations
- `GET/POST /api/participants` - Participant management
- `GET/POST /api/trials` - Trial data recording
- `GET /api/analytics?experimentId=X` - Analytics calculations

## 🧩 Component Library

Reusable components built for the platform:
- **StatCard**: Dashboard statistics with icons and trends
- **MiniChart**: Compact line/bar charts for dashboards
- **DashboardNav**: Sidebar navigation with active states
- **ExperimentBlock**: Drag-and-drop experiment building blocks

## 🎨 Theme Customization

Global theme variables in `src/app/globals.css`:
- `--electric-blue: #0ea5e9`
- `--deep-violet: #7c3aed`
- `--teal: #14b8a6`

Custom utility classes:
- `.gradient-electric` - Blue to violet gradient
- `.gradient-teal` - Teal to blue gradient
- `.shadow-premium` - Subtle premium shadow
- `.shadow-elevated` - Prominent elevated shadow

## 🔬 Experiment Types Supported

- **Stroop Task**: Color-word interference
- **Reaction Time**: Simple/choice reaction tasks
- **Visual Attention**: Search and selective attention
- **Memory Recall**: Short-term memory tests
- **Audio Processing**: Auditory discrimination
- **Spatial Working Memory**: Visual-spatial tasks

## 📈 Analytics Features

- Reaction time histograms
- Accuracy trend analysis
- Speed-accuracy tradeoff scatter plots
- Trial-by-trial data tables
- Export to CSV/JSON
- Descriptive statistics (mean, SD, effect size)

## 🎓 Built For Researchers

CogniLab follows best practices from established platforms like Prolific, Pavlovia, Gorilla, and OpenSesame.

## 🔒 Privacy & Ethics

- Anonymous data collection options
- GDPR compliance mode
- IRB approval tracking
- Informed consent workflows
- Participant data protection

---

**CogniLab** - Democratizing cognitive research, one experiment at a time.