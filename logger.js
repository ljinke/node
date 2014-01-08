console.logCopy = console.log.bind(console);

console.log = function()
{
    if (arguments.length)
    {
        var timestamp = '[' + Date.now() + '] ';
        this.logCopy(timestamp, arguments);
    }
};