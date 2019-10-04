// @flow
import React from 'react';
import {storiesOf} from '@storybook/react';
import Box from '../src/ui/box';
import theme from '../src/ui/theme/default_theme/';

const stories = storiesOf('Box', module);

stories.add('display', () => (
    <>
        Non-exhaustive list of display options
        {[
            'inherit',
            'initial',
            'unset',
            'block',
            'inline',
            'inline-block',
            'flex',
            'inline-flex',
            'table',
        ].map(display => (
            <Box key={display} display={display} border="default" padding={2} margin={2}>
                {display}
            </Box>
        ))}
    </>
));

stories.add('overflow', () => (
    <>
        Non-exhaustive options
        <Box backgroundColor="blueLight2" overflow="hidden" padding={2} margin={3}>
            overflow="hidden"
        </Box>
        <Box backgroundColor="blueLight2" overflowY="scroll" padding={2} margin={3}>
            overflowY="scroll"
        </Box>
        <Box backgroundColor="blueLight2" overflowX="scroll" padding={2} margin={3}>
            overflowX="scroll"
        </Box>
    </>
));

stories.add('as', () => (
    <>
        {[
            'div',
            'span',
            'section',
            'main',
            'nav',
            'header',
            'footer',
            'aside',
            'article',
            'address',
            'hgroup',
            'blockquote',
            'figure',
            'figcaption',
            'ol',
            'ul',
            'li',
            'pre',
        ].map(as => (
            <Box key={as} as={as}>
                {as}
            </Box>
        ))}
    </>
));

stories.add('ref', () => (
    <>
        <Box
            ref={node => {
                // eslint-disable-next-line no-console
                console.log(node);
            }}
        >
            Look into your console to see the ref
        </Box>
    </>
));

stories.add('breakpoints / responsive properties', () => (
    <>
        Breakpoints: <pre>{JSON.stringify(theme.breakpoints, null, 4)}</pre>
        <Box
            backgroundColor={{
                xsmallViewport: 'redLight2',
                smallViewport: 'blueLight2',
                mediumViewport: 'greenLight2',
                largeViewport: 'pinkLight2',
            }}
            marginTop={2}
            padding={2}
        >
            Resize to see color change
        </Box>
    </>
));

stories.add('custom className', () => (
    <>
        <Box className="user-provided-class">Inspect element to see class name</Box>
    </>
));

stories.add('id attribute', () => (
    <>
        <Box id="my-id">Inspect element to see class name</Box>
    </>
));

stories.add('tabindex attribute', () => (
    <>
        <Box tabIndex="-1">Inspect element to see tabindex</Box>
    </>
));

stories.add('style attribute', () => (
    <>
        <Box
            style={{
                transform: 'scale(0.95)',
            }}
        >
            Inspect element to see style attribute
        </Box>
    </>
));

stories.add('data attributes', () => (
    <>
        <Box
            dataAttributes={{
                'data-something': true,
                'data-other': 'string value',
            }}
        >
            Inspect element to see data attributes
        </Box>
    </>
));

stories.add('role attribute', () => (
    <>
        <Box role="nav">Inspect element to see rol attribute</Box>
    </>
));

stories.add('aria attributes', () => (
    <>
        <Box
            aria-label="__label__"
            aria-labelledby="__id__"
            aria-describedby="__id__"
            aria-controls="__id__"
            aria-expanded={false}
            aria-haspopup={false}
            aria-hidden={false}
            aria-live={false}
        >
            Inspect element to see aria attributes
        </Box>
    </>
));