<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<table class="table is-striped is-hoverable is-fullwidth">
			<tr bgcolor="#00D1B2">
				<th style="text-align:left">Car Model</th>
				<th style="text-align:left">Type</th>
				<th style="text-align:left">Width(m)</th>
				<th style="text-align:left">Length(m)</th>
				<th style="text-align:left">Max Speed</th>
				<th style="text-align:left">Nr. Doors</th>
				<th style="text-align:left">Brand</th>
			</tr>
			<xsl:for-each select="brands/brand">    
				<xsl:for-each select="car_models/model">
					<tr>
						<td><xsl:value-of select="name"/></td>
						<td><xsl:value-of select="type"/></td>
						<td><xsl:value-of select="width"/></td>
						<td><xsl:value-of select="length"/></td>
						<td><xsl:value-of select="max_speed"/></td>
						<td><xsl:value-of select="number_of_doors"/></td>
						<td><xsl:value-of select="../../brand_name"/></td>
					</tr>
				</xsl:for-each>            
			</xsl:for-each>
		</table>
	</xsl:template>
</xsl:stylesheet>

