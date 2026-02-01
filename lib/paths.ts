import type * as Metalsmith from 'metalsmith';

// NOTE: This didn't used to be needed - not sure what changed.

export function paths(): Metalsmith.Plugin {
  return (files: Metalsmith.Files, ms: Metalsmith, done: Metalsmith.Callback) => {
    for (const [path, file] of Object.entries(files)) {
      file.path ??= path;
    }
    done(null, files, ms);
  };
}
