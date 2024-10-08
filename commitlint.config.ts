module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'bugFix',
        'hotFix',
        'crFix',
        'feature',
        'release',
        'refactor',
        'revert',
        'style',
        'docs',
        'config',
        'npm',
        'chore',
        'delete',
      ],
    ],
    'type-case': [2, 'always', ['camel-case', 'lower-case']],
    'scope-case': [2, 'always', 'kebab-case'],
    'subject-case': [2, 'always', ['lower-case']],
    'scope-min-length': [2, 'always', 0],
    'scope-max-length': [2, 'always', 20],
    'subject-max-length': [2, 'always', 60],
  },
};
