# Local MCP Connections

A visualisation of Model Context Protocol (MCP) connection flow diagrams demonstrating different communication patterns and security models for local MCP server implementations.

## 🎯 Overview

This project provides illustrations of various local MCP (Model Context Protocol) connection patterns, focusing on:

- **Stdio-based communication** for maximum security
- **Network-based discovery** for remote AI Agents
- **Endpoint Security considerations** and best practices
- **Docker-based deployments** with different discovery patterns

## 📊 Diagram Sections

### 1. MCP Stdio External Resources Only
- **File**: `mcp-stdio-external-resource.svg`
- **Description**: Basic stdio communication flow with external resource access for MCP server processes
- **Key Highlights**: Process isolation, no network ports, maximum security

### 2. MCP Stdio - Internal and External Resources
- **File**: `mcp-stdio-external-resource-withsec.svg`
- **Description**: Endpoint security considerations for stdio-based MCP communication
- **Key Highlights**: Enhanced EDR, authentication layers, API security

### 3. Discoverable MCP with External Resources
- **File**: `MCP-External-resource-discoverable.svg`
- **Description**: Network-discoverable docker-based MCP servers with HTTP transport
- **Key Highlights**: Network discovery, external AI agent access, resource sharing

### 4. Docker MCP - Non-Discoverable
- **File**: `MCP-External-resource-non-discoverable.svg`
- **Description**: Docker-based MCP servers with restricted network access
- **Key Highlights**: Restricted access, manual configuration, security balance

## 🚀 Getting Started

### View the Diagrams
1. Open `index.html` in any modern web browser
2. Use the navigation section to explore different connection patterns
3. Each diagram includes brief explanations and key points

### Features
- **Interactive Navigation**: Click any section to view specific diagrams
- **Mobile Responsive**: Optimised for desktop, tablet, and mobile devices

## 🔧 Technical Details

### MCP Communication Patterns

#### Stdio Transport
- **Security**: Process-to-process communication only
- **Network**: No network interface or ports required
- **Isolation**: Maximum security through process isolation
- **Use Cases**: Local development, high-security environments

#### Network Transport
- **Discovery**: Optional network-based discovery mechanisms
- **Access**: External AI agent connectivity
- **Deployment**: Docker container
- **Use Cases**: Distributed systems, multi-agent environments

### Security Considerations

#### Endpoint Detection and Response (EDR)
- Tuned EDR rules for MCP server process visibility
- Enhanced monitoring and control capabilities
- Real-time threat detection and response
- Check out [MCPSpy](https://github.com/DarkChariot/mcpspy)

#### API Security
- Authentication mechanisms for external API access
- Advanced API security for external resource interactions
- Best practices for secure MCP server deployment
- Check out [LiteLLM MCP Gateway](https://docs.litellm.ai/docs/mcp)

## 📁 Project Structure

```
local-mcp-servers/
├── index.html                          # Main interactive web page
├── README.md                           # This file
├── mcp-stdio-external-resource.svg     # Basic stdio diagram
├── mcp-stdio-external-resource-withsec.svg  # Security-enhanced stdio diagram
├── MCP-External-resource-discoverable.svg   # Network discoverable diagram
└── MCP-External-resource-non-discoverable.svg # Non-discoverable diagram
```

## 🎨 Design Features

- **Modern UI**: Glassmorphism effects and smooth animations
- **Responsive Design**: Works on various device sizes
- **Accessibility**: Semantic HTML and keyboard navigation
- **Performance**: Optimised SVG loading and rendering

## 🔗 Related Resources

- [Model Context Protocol (MCP) Documentation](https://modelcontextprotocol.io/)
- [MCP GitHub Repository](https://github.com/modelcontextprotocol)
- [MCP Security Best Practices](https://modelcontextprotocol.io/specification/draft/basic/security_best_practices)

## 📄 License

This project is licensed under the CC0-1.0 license - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need assistance, please open an issue in this repository.

---

**Note**: This project provides educational and reference material for understanding local MCP connection patterns. Always follow security best practices when implementing local MCP servers in production environments.
