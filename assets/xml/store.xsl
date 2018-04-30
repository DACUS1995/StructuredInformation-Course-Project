<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <table border="1">
    <tr bgcolor="#9acd32">
      <th style="text-align:left">Car Model</th>
      <th style="text-align:left">Type</th>
    </tr>
    <xsl:for-each select="brand">    
        <xsl:for-each select="car/models/model">
            <tr>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="type"/></td>
            </tr>
        </xsl:for-each>            
    </xsl:for-each>
  </table>
</xsl:template>
</xsl:stylesheet>

