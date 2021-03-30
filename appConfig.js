var developmentDatabase = {
    postgres: {
    host: 'localhost',
    port: 5432,
    database: 'dc8rrf9ee4fbaf',
    user: 'cockkdwamhaloy',
    password: 'baf6f765b9fd650918f79f29b294dd32f241ade3b1f029d83a5fdd08b3d71e9f'
    }
    }
    
    var connectionString = "postgres://cockkdwamhaloy:baf6f765b9fd650918f79f29b294dd32f241ade3b1f029d83a5fdd08b3d71e9f@ec2-3-91-127-228.compute-1.amazonaws.com:5432/dc8rrf9ee4fbaf";
    if (process.env.NODE_ENV == 'production') {
    //Production mode
    if (process.env.DATABASE_URL) {
    developmentDatabase =
    parseConnectionString(process.env.DATABASE_URL);
    } else {
    console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
    developmentDatabase = parseConnectionString(connectionString);
    }
    }else{
    //Development mode
    developmentDatabase = parseConnectionString(connectionString);
    }
    function parseConnectionString(connectionString) {
    if (connectionString) {
    var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
    var match = myRegexp.exec(connectionString);
    if (match.length == 6) {
    developmentDatabase.postgres.user = match[1];
    developmentDatabase.postgres.password = match[2];
    developmentDatabase.postgres.host = match[3];
    developmentDatabase.postgres.port = Number(match[4]);
    developmentDatabase.postgres.database = match[5];
    developmentDatabase.postgres.ssl = true;
    return developmentDatabase;
    }
    }
    console.log("connectionString cannot be parsed");
    return null;
    }
    module.exports = {
    hostname: "http://localhost",
    port: 5656,
    database: {
    postgres: developmentDatabase.postgres
    }
    }