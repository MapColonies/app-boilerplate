# MapColonies App Boilerplate

A comprehensive boilerplate template for MapColonies applications built with Vite, React, TypeScript, Cesium, and i18n support.

## Features

- ⚡ **Vite** - Fast build tool and development server
- ⚛️ **React 18** with TypeScript
- 🗺️ **Cesium** - 3D globe and map visualization
- 🌍 **i18n** - Hebrew and English language support
- 🎨 **Material-UI** - Component library and theming
- 🚦 **React Router** - Client-side routing
- 🐳 **Docker** - Containerization support
- ⎈ **Helm** - Kubernetes deployment
- 🔄 **Release Please** - Automated releases and changelogs
- 🛠️ **Runtime Configuration** - Environment variables support via confd

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MapColonies/app-boilerplate.git
cd app-boilerplate

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

The application will be available at http://localhost:3000

### Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run prettier:fix
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=MapColonies App
VITE_API_URL=http://localhost:8080
PUBLIC_URL=/
```

### Runtime Configuration

The application supports runtime configuration via `confd`. Environment variables are injected at runtime:

- `CONFIGURATION_UI_LANGUAGE` - UI language (en/he)
- `CONFIGURATION_API_URL` - API endpoint URL
- `CONFIGURATION_PUBLIC_URL` - Public URL path
- `CONFIGURATION_MAP_CENTER` - Map center coordinates
- `CONFIGURATION_MAP_ZOOM` - Default map zoom level
- `CONFIGURATION_LOGGER_LEVEL` - Log level (warn/info/debug)

## Project Structure

```
app-boilerplate/
├── src/
│   ├── components/        # Reusable components
│   │   └── Layout/       # Layout component with navigation
│   ├── config/           # Configuration files
│   ├── i18n/             # Internationalization
│   │   ├── locales/      # Translation files (en, he)
│   │   └── I18nProvider.tsx
│   ├── pages/            # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   └── MapView/      # Cesium map integration
│   ├── routes/           # Route configuration
│   ├── theme/            # Theme configuration
│   ├── App.tsx
│   └── main.tsx
├── helm/                 # Helm charts for Kubernetes
│   ├── templates/
│   ├── Chart.yaml
│   └── values.yaml
├── confd/                # Runtime configuration
│   ├── generate-config.js
│   ├── production.tmpl
│   ├── production.toml
│   └── index.toml
├── Dockerfile
├── docker-compose.yml
└── vite.config.ts
```

## Docker

### Build and Run

```bash
# Build Docker image
docker build -t app-boilerplate .

# Run container
docker run -p 8080:8080 \
  -e CONFIGURATION_UI_LANGUAGE=en \
  -e CONFIGURATION_API_URL=http://api.example.com \
  app-boilerplate
```

## Kubernetes Deployment

### Using Helm

```bash
# Install the Helm chart
helm install app-boilerplate ./helm \
  --set image.repository=your-registry/app-boilerplate \
  --set image.tag=latest \
  --set env.language=en \
  --set env.apiUrl=http://api.example.com

# Upgrade the deployment
helm upgrade app-boilerplate ./helm

# Uninstall
helm uninstall app-boilerplate
```

## Internationalization

The application supports Hebrew (RTL) and English (LTR) languages. Add translations in:

- `src/i18n/locales/en.json`
- `src/i18n/locales/he.json`

Use the `useIntl` hook from react-intl:

```tsx
import { useIntl } from 'react-intl';

const Component = () => {
  const intl = useIntl();
  return <h1>{intl.formatMessage({ id: 'home.title' })}</h1>;
};
```

## Cesium Integration

The MapView component demonstrates Cesium integration. Customize the map in `src/pages/MapView/MapView.tsx`.

## Release Management

This project uses [Release Please](https://github.com/googleapis/release-please) for automated releases.

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes using conventional commits
4. Push to the branch
5. Create a Pull Request

## License

MIT

## Support

For support and questions, please open an issue in the GitHub repository.
