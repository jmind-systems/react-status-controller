import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { StatusController } from '../index';

describe('StatusController', () => {
    afterEach(() => {
        cleanup();
    });

    const setUp = extraProps => {
        return render(<StatusController {...extraProps}><span data-testid="content">Some Content</span></StatusController>);
    };

    it('Should render content if all statuses equal to success', () => {
        const { getByTestId } = setUp({ statuses: ['success'] });
        const content = getByTestId('content');
        expect(content).toBeDefined();
    })

    it('Should render a loader if one of statuses equal to loading', () => {
        const { getByTestId } = setUp({ statuses: ['loading', 'success'] });
        const loader = getByTestId('loader');
        expect(loader).toBeDefined();
    })

    it('Should render error, if one of statuses is equal to error', () => {
        const { getByTestId } = setUp({ statuses: ['loading', 'error'], error: () => <span data-testid="error">Some Error</span> });
        const error = getByTestId('error');
        expect(error).toBeDefined();
    })
})
