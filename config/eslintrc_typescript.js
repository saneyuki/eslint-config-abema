// XXX: To uniform the style of an object literals, we enable `quote-props`
/*eslint quote-props: [2, "always"] no-magic-numbers: 0 */

'use strict';

module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
    ],

    'rules': {
        // TODO: @typescript-eslint/adjacent-overload-signatures
        // TODO: @typescript-eslint/array-type
        // TODO: @typescript-eslint/ban-types
        // TODO: @typescript-eslint/ban-ts-ignore
        // TODO: @typescript-eslint/camelcase
        // TODO: @typescript-eslint/class-name-casing
        // TODO: @typescript-eslint/explicit-function-return-type
        // TODO: @typescript-eslint/explicit-member-accessibility
        // TODO: @typescript-eslint/generic-type-naming
        // TODO: @typescript-eslint/indent
        // TODO: @typescript-eslint/interface-name-prefix

        // Sort with the preferred style (`;`) in TypeScript world.
        '@typescript-eslint/member-delimiter-style': ['warn', {
            'multiline': {
                'delimiter': 'semi',
                'requireLast': true,
            },
            'singleline': {
                'delimiter': 'semi',
                'requireLast': true,
            }
        }],

        // TODO: @typescript-eslint/member-naming

        // I don't think it's not efffective to sort the order by public/private/protected.
        '@typescript-eslint/member-ordering': ['warn', {
            // * I'd like to aggregate instance fields
            //   to know what we should initialize in the constructor to stabilize the object shape.
            // * It's the time to refactor the object if we'd like to mix the order of static fields & methods.
            'default': [
                'static-field',
                'static-method',
                'instance-field',
                'constructor',
                'instance-method',
            ],
        }],

        // TODO: @typescript-eslint/no-angle-bracket-type-assertion
        // TODO: @typescript-eslint/no-array-constructor
        // TODO: @typescript-eslint/no-empty-interface

        // Please opt-out this rule if you don't have any workarounds.
        '@typescript-eslint/no-explicit-any': 'warn',

        // TODO: @typescript-eslint/no-extraneous-class
        // TODO: @typescript-eslint/no-for-in-array
        // TODO: @typescript-eslint/no-inferrable-types
        // TODO: @typescript-eslint/no-misused-new
        // TODO: @typescript-eslint/no-namespace

        // Please opt-out this rule if you don't have any workarounds.
        '@typescript-eslint/no-non-null-assertion': 'warn',

        // TODO: @typescript-eslint/no-object-literal-type-assertion
        // TODO: @typescript-eslint/no-parameter-properties
        // TODO: @typescript-eslint/no-require-imports
        // TODO: @typescript-eslint/no-this-alias
        // TODO: @typescript-eslint/no-triple-slash-reference
        // TODO: @typescript-eslint/no-type-alias
        // TODO: @typescript-eslint/no-unnecessary-qualifier
        // TODO: @typescript-eslint/no-unnecessary-type-assertion

        // the default `no-unused-vars` is not support type annotations.
        'no-unused-vars': 'off',
        // Sort values with `no-unused-vars` provided by core.
        '@typescript-eslint/no-unused-vars': ['warn', {
            'vars': 'all',
            'args': 'after-used',
            'argsIgnorePattern': '^_', // Sort with TypeScript compiler's builtin linter.
            'caughtErrors': 'all',
            'caughtErrorsIgnorePattern': '^_', // Allow `catch (_e) {...}`
        }],

        // TODO: @typescript-eslint/no-use-before-define

        // We should sort with builtin rule.
        '@typescript-eslint/no-useless-constructor': 'off',

        // TODO: @typescript-eslint/no-var-requires
        // TODO: @typescript-eslint/prefer-function-type
        // TODO: @typescript-eslint/prefer-interface

        // This bans legacy syntax.
        '@typescript-eslint/prefer-namespace-keyword': 'error',

        // TODO: @typescript-eslint/promise-function-async
        // TODO: @typescript-eslint/restrict-plus-operands
        // TODO: @typescript-eslint/type-annotation-spacing
    }
};
