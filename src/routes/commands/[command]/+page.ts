import { error } from '@sveltejs/kit';
import commands from "../../../assets/json/commands.json";
import type { commandDto } from '$lib';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const query = params.command;
    const commandList: commandDto[] = commands[query];

    if (commandList) {
        return { commands: commandList, category: query };
    }
    return { commands: null }
}