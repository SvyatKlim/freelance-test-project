const srcPath = 'src';
const destPath = 'build';
const rootPath = './';

const config = {
  src: {
    root: rootPath,
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/assets/fonts`,
    images: `${srcPath}/assets/images`,
    icons: `${srcPath}/assets/icons/`,
  },

  dest: {
    root: rootPath,
    dest: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    fonts: `${destPath}/fonts`,
    images: `${destPath}/images`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
