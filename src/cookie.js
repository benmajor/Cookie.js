var Cookie =
{
    // Create a new cookie:
    create: function( name, value, expire, path )
    {
        var thePath = (path) ? path : '/',
            d       = new Date();
            
        d.setTime(d.getTime() + (expire * 86400000));
        
        document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path='+thePath;
    },
    
    // Get the value for a cookie:
    read: function( name )
    {
        var n  = name + '=',
            dc = decodeURIComponent(document.cookie),
            ca = dc.split(';');
            
        for( var i = 0; i < ca.length; i++ )
        {
            var c = ca[i];
            while( c.charAt(0) == ' ' ) { c = c.substring(1); }
            
            if( c.indexOf(n) == 0 )
            {
                return c.substring(n.length, c.length);
            }
        }
        
        return '';
    },
    
    // Checks if a cookie is already set:
    isSet: function( name )
    {
        return ( document.cookie.indexOf(name+'=') > -1 );
    },
    
    // Delete a cookie:
    erase: function( name )
    {
        this.create( name, '', -1);
    }
}
