# Profile

My personal website that primarily to host my blog and others such as profile, portfolio, and talks.

Built using:

- React (with Gatsby) + Typescript for main stack
- Contentful for content
- TailwindCSS for styling
- Gatsby Cloud for build and hosting

Open here https://iwgx.io

## Usage

1. Create `.env.development` file in root project, then fill it with `Contentful` environment variables

```
CONTENTFUL_ACCESS_TOKEN=**************
CONTENTFUL_HOST=**********
CONTENTFUL_SPACE_ID=******
```

2. Install dependencies `yarn install`
3. Run it `yarn start`

## Deploy

1. Push any change to github `git push`
2. It's already integrated with Gatsby Cloud Hosting so after any push it will be updated
