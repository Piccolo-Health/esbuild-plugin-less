import fs from 'fs';
import less from 'less';
import { Plugin, PluginBuild, OnLoadOptions, OnLoadArgs } from 'esbuild';

export interface LessPluginOptions {}

export const defaultOptions: LessPluginOptions = {
  sourceMap: true,
  plugins: [],
  relativeUrls: true,
};

const buildOptions: OnLoadOptions = {
  filter: /\.less$/,
};

export default (options: LessPluginOptions): Plugin => ({
  name: 'less',
  setup(build: PluginBuild) {
    build.onLoad(buildOptions, async (args: OnLoadArgs) => {
      const lessOptions = Object.assign(defaultOptions, options, {
        filename: args.path,
      });

      try {
        const data = await fs.promises.readFile(args.path, 'utf8');
        const result = await less.render(data, lessOptions);
        return { contents: result.css, loader: 'css' };
      } catch (error) {
        return { errors: [{ text: error.message }] };
      }
    });
  },
});
