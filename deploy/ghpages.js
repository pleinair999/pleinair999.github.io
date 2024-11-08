// place at : deploy/ghpages.js
// you can see more info at https://github.com/tschaub/gh-pages
import { resolve } from 'path';
import { publish } from 'gh-pages';

const options = {
    branch: 'gh-pages',
    repo: 'https://github.com/pleinair999/pleinair999.github.io.git' // project github repo
};

const callback = err => {

    if (err) console.error(err);
    else console.log('publish success');
};

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
publish(resolve(__dirname, '../dist'), options, callback);